import Vue from 'vue';
import { ValidationProvider } from "vee-validate";

export default Vue.extend({
    components: {
        ValidationProvider
    },
    data() {
        return {
            input: '',
            images: [],
            preview: ''
        };
    },
    props: {
        id: {
            type: String,
            required: true
        },
        uploadLimit: {
            type: Number,
            default: 2,
            required: false
        },
        oldImages: {
            type: null,
            required: false
        }
    },
    mounted() {
        this.preview = document.getElementById(this.id);        
    },
    methods: {
        hasLimit(event) {
            const { files: imageList } = this.input;
            
            if (imageList.length > this.uploadLimit) {
                this.$filterToast(
                    this.$toast, 
                    `Envie no máximo ${this.uploadLimit} imagens!`, 
                    true
                );
                event.preventDefault();
                return true;
            }

            const imagesContainer = [];
            this.preview.childNodes.forEach(item => {
                if (item.classList && item.classList.value === "image")
                    imagesContainer.push(item);
            });

            const totalImages = imageList.length + imagesContainer.length;

            if (totalImages > this.uploadLimit) {
                this.$filterToast(
                    this.$toast, 
                    `Você atingiu o limite máximo de imagens!`, 
                    true
                );
                event.preventDefault();
                return true;
            }

            return false;
        },
        getImageContainer(image) {
            const container = document.createElement('span');
            container.role = 'button';
            container.classList.add('image');
            container.onclick = this.removeImage;
            container.addEventListener('keydown', (event) => {      
                if (event.key == 'Enter') {
                    this.removeImage(event);
                }
            });
            container.appendChild(image);
            container.appendChild(this.getRemoveButton());
            container.tabIndex = 0;
            container.ariaLabel = "Remover imagem";
            return container;
        },
        getRemoveButton() {
            const button = document.createElement('span');
            button.classList.add('material-icons');
            button.innerHTML = "close";
            return button;
        },
        removeImage(event) {
            let imageContainer = event.target.parentNode;

            if (event.type !== "click") {
                imageContainer = event.target;
            }

            const imagesArray = Array.from(this.preview.children);
            const index = imagesArray.indexOf(imageContainer + 1);

            this.images.splice(index, 1);
            this.input.files = this.getAllImages();

            imageContainer.remove();

            this.$emit('input', this.input.files);
        },
        removeOldImage(event) {
            let imageContainer = event.target.parentNode;

            if (event.type !== "click") {
                imageContainer = event.target;
            }

            if (imageContainer.id) {
                const removedImages = document.querySelector('input[name="removed-images"]');
                if (removedImages) {
                    removedImages.value 
                        ? removedImages.value += `,${imageContainer.id}` 
                        : removedImages.value += `${imageContainer.id}`;
                }

                this.$emit('removedImages', removedImages.value);
            }
            imageContainer.remove();
        },
        getAllImages() {
            const dataTransfer = new ClipboardEvent("").clipboardData || new DataTransfer();

            this.images.forEach(image => dataTransfer.items.add(image));

            return dataTransfer.files;
        },
        handleFileInput(event) {
            this.input = event.target;
            const { files: imageList } = this.input;
            
            if(this.hasLimit(event)) return;

            Array.from(imageList).forEach(image => {

                this.images.push(image);

                const reader = new FileReader();

                reader.onload = () => {
                    const image = new Image();
                    image.src = String(reader.result);

                    const container = this.getImageContainer(image);
                    this.preview.appendChild(container);
                };

                this.input.files = this.getAllImages();
                reader.readAsDataURL(image);
            });
            
            this.input.files = this.getAllImages();
            this.$emit('input', this.input.files);
        },
    }
});

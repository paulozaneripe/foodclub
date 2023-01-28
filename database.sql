CREATE TABLE "image" (
  "id" SERIAL PRIMARY KEY,
  "url" text NOT NULL
);

CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "image_id" int UNIQUE,
  "name" text NOT NULL,
  "email" text UNIQUE NOT NULL,
  "password" text NOT NULL,
  "about" text,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "recipe" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int NOT NULL,
  "title" text NOT NULL,
  "ingredients" text[],
  "preparation" text[],
  "information" text,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "recipe_image" (
  "id" SERIAL PRIMARY KEY,
  "recipe_id" int NOT NULL,
  "image_id" int NOT NULL
);

CREATE TABLE "rating" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int NOT NULL,
  "recipe_id" int NOT NULL,
  "rate" int NOT NULL
);

CREATE TABLE "comment" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int NOT NULL,
  "recipe_id" int NOT NULL,
  "content" text NOT NULL,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

ALTER TABLE "user" ADD FOREIGN KEY ("image_id") REFERENCES "image" ("id") ON DELETE CASCADE;
ALTER TABLE "user" ADD CONSTRAINT user_email_lowercase_ck CHECK (email = LOWER(email));
ALTER TABLE "recipe" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");
ALTER TABLE "recipe_image" ADD FOREIGN KEY ("recipe_id") REFERENCES "recipe" ("id") ON DELETE CASCADE;
ALTER TABLE "recipe_image" ADD FOREIGN KEY ("image_id") REFERENCES "image" ("id") ON DELETE CASCADE;
ALTER TABLE "rating" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");
ALTER TABLE "rating" ADD FOREIGN KEY ("recipe_id") REFERENCES "recipe" ("id");
ALTER TABLE "comment" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");
ALTER TABLE "comment" ADD FOREIGN KEY ("recipe_id") REFERENCES "recipe" ("id");

CREATE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "user"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "recipe"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "comment"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE OR REPLACE FUNCTION lowercase_email() RETURNS trigger AS $lowercase_email$
    BEGIN
        NEW.email = LOWER(NEW.email);
        RETURN NEW;
    END;
$lowercase_email$ LANGUAGE plpgsql;

CREATE TRIGGER lowercase_email BEFORE INSERT ON "user" FOR EACH ROW EXECUTE PROCEDURE lowercase_email();
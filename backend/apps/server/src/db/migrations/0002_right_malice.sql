CREATE TYPE "public"."country" AS ENUM('ES', 'US');--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "country" "country" NOT NULL;--> statement-breakpoint
ALTER TABLE "retailers" ADD COLUMN "country" "country" NOT NULL;
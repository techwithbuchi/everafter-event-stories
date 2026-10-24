import { describe, it, expect } from "vitest";
import { enquirySchema } from "@/lib/enquiry";

const ok = { name: "Ann", email: "ann@example.com", event_type: "wedding", message: "We'd love help planning." };

describe("enquiry validation", () => {
  it("accepts a valid enquiry", () => expect(enquirySchema.safeParse(ok).success).toBe(true));
  it("rejects guest count above 5000", () => expect(enquirySchema.safeParse({ ...ok, guest_count: "5001" }).success).toBe(false));
  it("rejects messages under 10 characters", () => expect(enquirySchema.safeParse({ ...ok, message: "hi" }).success).toBe(false));
});

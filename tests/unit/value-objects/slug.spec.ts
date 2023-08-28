import { Slug } from "@/domain/entities/value-objects/slug"
import { expect, test } from "vitest"

test('Should be able to create a new slug from text', () => {
  const slug = Slug.createFromText('Example question title')

  expect(slug.value).toEqual('example-question-title')
})

import {z} from 'zod'

type MicrocmsAPI = {
  list: { [Key: string]: unknown }
  object: { [Key: string]: unknown }
}

const reference = <T extends unknown>(schema: T): T => {
  // コンテンツ参照の為のなんらかの処理
  return schema
}

export const createMock = (microcmsAPI: MicrocmsAPI) => (): void => {
  // モックサーバーの実行処理
}

const categorySchema = z.object({
  name: z.string().or(z.undefined())
})

const blogSchema = z.object({
  title: z.string().or(z.undefined()),
  content: z.string().or(z.undefined()),
  eyecatch: z.object({
    url: z.string().url(),
    height: z.number(),
    width: z.number(),
  }),
  category: reference(categorySchema)
})

const settingsSchema = z.object({
  siteName: z.string()
})

const microcmsAPI = {
  list: {
    categories: categorySchema,
    blogs: blogSchema
  },
  object: {
    settings: settingsSchema
  },
}  as const satisfies MicrocmsAPI

const executeMock = createMock(microcmsAPI)

// モックサーバー（msw）を実行する
executeMock()
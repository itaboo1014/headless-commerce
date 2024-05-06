// libs/client.js

import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN || '',
  apiKey: process.env.API_KEY || '',
});

// type depthNumber = 0 | 1 | 2 | 3;
// // export interface MicroCMSQueries {
// export interface MicroCMSQueries {
//   draftKey?: string;
//   limit?: number;
//   offset?: number;
//   orders?: string;
//   fields?: string | string[];
//   q?: string;
//   depth?: depthNumber;
//   ids?: string | string[];
//   filters?: string;
//   richEditorFormat?: 'html' | 'object';
// }

// // ブログ一覧を取得
// export const getList = async (queries?: MicroCMSQueries) => {
//   const listData = await client.getList<Blog>({
//     endpoint: "blogs",
//     queries,
//   });

//   // データの取得が目視しやすいよう明示的に遅延効果を追加
//   await new Promise((resolve) => setTimeout(resolve, 3000));

//   return listData;
// };

// // ブログの詳細を取得
// export const getDetail = async (
//   contentId: string,
//   queries?: MicroCMSQueries
// ) => {
//   const detailData = await client.getListDetail<Blog>({
//     endpoint: "blogs",
//     contentId,
//     queries,
//   });

//   // データの取得が目視しやすいよう明示的に遅延効果を追加
//   await new Promise((resolve) => setTimeout(resolve, 3000));

//   return detailData;
// };

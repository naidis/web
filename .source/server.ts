// @ts-nocheck
import * as __fd_glob_16 from "../content/docs/modules/youtube.mdx?collection=docs"
import * as __fd_glob_15 from "../content/docs/modules/web-clip.mdx?collection=docs"
import * as __fd_glob_14 from "../content/docs/modules/spaced-repetition.mdx?collection=docs"
import * as __fd_glob_13 from "../content/docs/modules/rss.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/modules/pdf.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/modules/kindle.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/modules/external-sync.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/modules/audio.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/modules/ai-chat.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/prd.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/installation.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/faq.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/design-system.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/api-reference.mdx?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/modules/meta.json?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, "modules/meta.json": __fd_glob_1, }, {"api-reference.mdx": __fd_glob_2, "design-system.mdx": __fd_glob_3, "faq.mdx": __fd_glob_4, "index.mdx": __fd_glob_5, "installation.mdx": __fd_glob_6, "prd.mdx": __fd_glob_7, "modules/ai-chat.mdx": __fd_glob_8, "modules/audio.mdx": __fd_glob_9, "modules/external-sync.mdx": __fd_glob_10, "modules/kindle.mdx": __fd_glob_11, "modules/pdf.mdx": __fd_glob_12, "modules/rss.mdx": __fd_glob_13, "modules/spaced-repetition.mdx": __fd_glob_14, "modules/web-clip.mdx": __fd_glob_15, "modules/youtube.mdx": __fd_glob_16, });
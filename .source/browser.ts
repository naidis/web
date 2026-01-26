// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"api-reference.mdx": () => import("../content/docs/api-reference.mdx?collection=docs"), "design-system.mdx": () => import("../content/docs/design-system.mdx?collection=docs"), "faq.mdx": () => import("../content/docs/faq.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "installation.mdx": () => import("../content/docs/installation.mdx?collection=docs"), "prd.mdx": () => import("../content/docs/prd.mdx?collection=docs"), "modules/ai-chat.mdx": () => import("../content/docs/modules/ai-chat.mdx?collection=docs"), "modules/audio.mdx": () => import("../content/docs/modules/audio.mdx?collection=docs"), "modules/external-sync.mdx": () => import("../content/docs/modules/external-sync.mdx?collection=docs"), "modules/kindle.mdx": () => import("../content/docs/modules/kindle.mdx?collection=docs"), "modules/pdf.mdx": () => import("../content/docs/modules/pdf.mdx?collection=docs"), "modules/rss.mdx": () => import("../content/docs/modules/rss.mdx?collection=docs"), "modules/spaced-repetition.mdx": () => import("../content/docs/modules/spaced-repetition.mdx?collection=docs"), "modules/web-clip.mdx": () => import("../content/docs/modules/web-clip.mdx?collection=docs"), "modules/youtube.mdx": () => import("../content/docs/modules/youtube.mdx?collection=docs"), }),
};
export default browserCollections;
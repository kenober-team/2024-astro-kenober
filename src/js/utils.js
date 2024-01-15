/**
 * This function takes a text and converts it into a URL-friendly slug.
 * It performs the following transformations:
 * - Normalizes the string to remove accents
 * - Converts the text to lower case
 * - Replaces single quotes and double quotes with spaces
 * - Replaces spaces with hyphens
 * - Removes all non-alphanumeric characters except hyphens
 * - Replaces multiple consecutive hyphens with a single hyphen
 * - Replaces all non-ASCII characters with hyphens
 * - Removes leading and trailing hyphens
 *
 * @param {string} text - The text to be slugified.
 * @returns {string} The slugified text.
 */
export function slugify(text) {
  return text
    .toString()
    .normalize("NFD")
    .toLowerCase()
    .replace(/['"]/g, " ")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/[^\x00-\x7F]/g, "-")
    .replace(/-+$/, "");
}

/**
 * This function takes a date string and returns a formatted date string in French locale.
 *
 * @param {string} date - The date string to be formatted.
 * @returns {string} The formatted date string.
 */
export function formatDate(date) {
  return new Date(date).toLocaleDateString("fr-FR", {
    timeZone: "UTC",
  });
}

/**
 * This function formats an array of blog posts. It can filter out drafts and future posts, sort by date, and limit the number of posts.
 *
 * @param {Array} posts - The array of blog posts. Each post should be an object with a 'date' and 'draft' property.
 * @param {Object} options - An object with options for formatting the blog posts.
 * @param {boolean} options.filterOutDrafts - Whether to filter out drafts. Defaults to true.
 * @param {boolean} options.filterOutFuturePosts - Whether to filter out future posts. Defaults to true.
 * @param {boolean} options.sortByDate - Whether to sort the posts by date. Defaults to true.
 * @param {number} options.limit - The maximum number of posts to return. If undefined, all posts are returned.
 * @returns {Array} The formatted array of blog posts.
 */
export function formatBlogPosts(
  posts,
  {
    filterOutDrafts = true,
    filterOutFuturePosts = true,
    sortByDate = true,
    limit = undefined,
  } = {},
) {
  const filteredPosts = posts.reduce((acc, post) => {
    const { pubDate, published } = post.data;
    // filterOutDrafts if true
    if (filterOutDrafts && !published) return acc;

    // filterOutFuturePosts if true
    if (filterOutFuturePosts && new Date(pubDate) > new Date()) return acc;

    // add post to acc
    acc.push(post);

    return acc;
  }, []);

  // sortByDate or randomize
  if (sortByDate) {
    filteredPosts.sort(
      (a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate),
    );
  } else {
    filteredPosts.sort(() => Math.random() - 0.5);
  }

  // limit if number is passed
  if (typeof limit === "number") {
    return filteredPosts.slice(0, limit);
  }
  return filteredPosts;
}

/**
 * This function formats an array of references. It can filter out drafts, sort by date, and limit the number of references.
 *
 * @param {Array} references - The array of references. Each reference should be an object with a 'date' and 'draft' property.
 * @param {Object} options - An object with options for formatting the references.
 * @param {boolean} options.filterOutDrafts - Whether to filter out drafts. Defaults to true.
 * @param {boolean} options.sortByDate - Whether to sort the references by date. Defaults to true.
 * @param {number} options.limit - The maximum number of references to return. If undefined, all references are returned.
 * @returns {Array} The formatted array of references.
 */
export function formatReferences(
  references,
  { filterOutDrafts = true, sortByDate = true, limit = undefined } = {},
) {
  const filteredReferences = references.reduce((acc, ref) => {
    const { published } = ref.data;
    // filterOutDrafts if true
    if (filterOutDrafts && !published) return acc;

    // add reference to acc
    acc.push(ref);

    return acc;
  }, []);

  // sortByDate or randomize
  if (sortByDate) {
    filteredReferences.sort(
      (a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate),
    );
  } else {
    filteredReferences.sort(() => Math.random() - 0.5);
  }

  // limit if number is passed
  if (typeof limit === "number") {
    return filteredReferences.slice(0, limit);
  }
  return filteredReferences;
}

/**
 * This function takes an entry object and a path to exclude, and returns an object with a 'query' and 'path' property.
 * The 'query' is derived from the entry's URL, with all slashes removed.
 * The 'path' is derived from the entry's file property, with the pathToExclude and query removed.
 *
 * @param {Object} entry - The entry object. It should have a 'url' and 'file' property.
 * @param {string} pathToExclude - The path to exclude from the entry's file property. Defaults to "/nova-astro-site/src/pages".
 * @returns {Object} An object with a 'query' and 'path' property.
 */
export async function entryToPathAndQuery(
  entry,
  pathToExclude = "/nova-astro-site/src/pages",
) {
  const query = entry.url.replaceAll("/", "");
  const path = entry.file.replace(`${pathToExclude}/${query}`, "");
  return { query: query, path: path };
}

/**
 * Generates a sequence of sizes for responsives images.
 *
 * @param {number} first - The first number in the sequence.
 * @param {number} last - The last number in the sequence.
 * @param {number} [size=16] - The number of elements in the sequence. Defaults to 16.
 * @returns {number[]} The generated sequence, with each number rounded to the nearest integer.
 */
export function responsiveSequence(first, last, size = 16) {
  if (size <= 0) return [];
  if (size === 1) return [first];
  if (size === 2) return [first, last];

  const ratio = (last / first) ** (1 / (size - 1));

  const seq = [first];
  for (let i = 1; i < size - 1; i++) {
    seq.push(seq[i - 1] * ratio);
  }
  seq.push(last);

  return seq.map((value) => Math.round(value));
}
// the extention must be removed from the file name
export function getFileNameFromPath(path) {
  return path.replace(/\/$/, "").split("/").pop().split(".")[0];
}

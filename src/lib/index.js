// place files you want to import through the `$lib` alias in this folder.
import imagesLoaded from 'imagesloaded';

/**
 * Preloads images specified by the CSS selector.
 * @function
 * @param {string} [selector="img"] - CSS selector for target images.
 * @returns {Promise} - Resolves when all specified images are loaded.
 */
const preloadImages = (selector = 'img') => {
	return new Promise((resolve) => {
		// The imagesLoaded library is used to ensure all images (including backgrounds) are fully loaded.
		imagesLoaded(document.querySelectorAll(selector), { background: true }, resolve);
	});
};

const domainName = "https://miss-maude-hjcfb.sevalla.page"


const collectionData = {
	ayana : {
		title: "MISS MAUDE | AYANA",
		desc: "Chaque pli, chaque broderie évoque la maîtrise du geste et la douceur de l’allure.",
		image: domainName + "/images/AYANA/V-1/image-1.avif"
	}, 
	malaika: {
		title: "MISS MAUDE | MALAIKA",
		desc: "Cette robe attire l'attention et capte le regard. Ses couleurs, ses motifs, et sa coupe unique créent un effet hypnotique qui attire l'oeil et suscite l'admiration.",
		image: domainName + "/images/MALAIKA/V-1/image-8.avif"
	},
	nabou : {
		title: "MISS MAUDE | NABOU",
		desc: "La coupe simple lui confère une élégance intemporelle et naturelle. Le motif floral ajoute une touche de douceur et de féminité.",
		image: domainName + "/images/NABOU/V-1/image-14.avif"
	},
	nanssy: {
		title: "MISS MAUDE | NANSSY",
		desc: "Une coupe ample et majestueuse, des manches spectaculaires, un tombé qui glisse sur la peau comme une caresse.",
		image: domainName + "/images/NANSSY/V-1/image-25.avif"
	},
	nayanka: {
		title: "MISS MAUDE | NAYANKA",
		desc: "Volumes sculptés, drapé maîtrisé, caractère affirmé.",
		image: domainName + "/images/NAYANKA/V-1/image-37.avif"
	},
	obara: {
		title: "MISS MAUDE | OBARA",
		desc: "Une pièce entièrement perlée à la main, patiemment sculptée avant d’être montée.",
		image: domainName + "/images/NAYANKA/V-1/image-42.avif"
	},
	selene: {
		title: "MISS MAUDE | SÉLÉNÉ",
		desc: "S'accordant parfaitement avec les détails minutieux et les matériaux nobles de vos créations.",
		image: domainName + "/images/NAYANKA/V-1/image-42.avif"
	},
}

// Exporting utility functions for use in other modules.
export { preloadImages, domainName, collectionData };
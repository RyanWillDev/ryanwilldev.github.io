const originalDescription = 'Web Developer in the Nashville area with a passion for learning and creating custom websites and applications.';

const getMetaDescriptions = () => (
  Array.from(document.getElementsByTagName('meta'))
  .filter((tag) => {
    if (!tag.attributes.property) return false;

    return tag.attributes.property.nodeValue.includes('twitter:description')
      || tag.attributes.property.nodeValue.includes('og:description');
  })
);

const setMetaDescriptions = (description) => {
  getMetaDescriptions()
  .forEach((tag) => {
    if (tag.attributes.content) {
      tag.setAttribute('content', description);
    }

    if (tag.attributes.value) {
      tag.setAttribute('value', description);
    }
  });
};

const resetDescriptions = () => {
  getMetaDescriptions()
  .forEach((tag) => {
    if (tag.attributes.content) {
      tag.setAttribute('content', originalDescription);
    }

    if (tag.attributes.value) {
      tag.setAttribute('value', originalDescription);
    }
  });
};

export { setMetaDescriptions };
export { resetDescriptions };

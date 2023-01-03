export interface Photo {
  url: string;
  attributionUrl: string;
  authorName: string;
}

export const allTopics = [
  {
    slug: "people",
    name: "People",
    description:
      "To draw people, start by sketching out the basic shape of the body using simple lines and circles to represent the head, torso, arms, and legs. Then, add details such as facial features, hair, and clothing to complete the picture. Remember to pay attention to proportions and keep practicing to improve your skills.",
  },
  {
    slug: "animals",
    name: "Animals",
    description:
      "To draw animals, first research the animal you want to draw to understand its unique characteristics and features. Then, sketch out the basic shape of the animal using simple lines and shapes. Add details such as fur, feathers, and features such as eyes, nose, and mouth. Pay attention to the proportions of the different parts of the animal's body, and keep practicing to improve your skills.",
  },
  { slug: "nature", name: "Nature",
    description: "To draw landscapes, start by sketching out the basic shapes of the landscape elements such as mountains, trees, and bodies of water using simple lines and shapes. Then, add details such as foliage, rocks, and reflections in water to complete the picture. Remember to pay attention to the perspective and the lighting of the scene, and keep practicing to improve your skills."},
  { slug: "architecture-interior", name: "Architecture",
    description: "To draw architecture, start by researching the style and features of the building you want to draw. Then, sketch out the basic shape of the building using simple lines and shapes, paying attention to the proportions and perspective. Add details such as windows, doors, and decorative features to complete the picture. Keep practicing to improve your skills and attention to detail."},
  { slug: "travel", name: "Travel" },
];

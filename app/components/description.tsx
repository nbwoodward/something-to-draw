import { allTopics } from "../lib/data";

const defaultTopicName = "From Photos"
const defaultTopicDescription = "To draw from a photo, start by studying the photo and identifying the basic shapes and structures within it. Then, sketch out the basic lines and shapes of the objects in the photo using a light pencil. Add details and shading to bring the drawing to life, paying attention to the values and colors in the original photo for reference. Keep practicing and experimenting with different techniques to improve your skills."

interface DescriptionProps {
  topic?: string
}

const Description = ({topic}: DescriptionProps) => {

  let topicObj = allTopics.filter(t => t.slug === topic)?.[0]
  const topicName =  topicObj?.name || defaultTopicName
  const topicDescription =  topicObj?.description || defaultTopicDescription

  return (
    <div id="description">
      <p>
        We have collected thousands of high quality images to inspire drawing,
        painting, and other artistic endeavors.
      </p>
      <h2>How to Start Drawing</h2>
      <p>
        To start drawing, you will need a few supplies such as paper, pencils,
        and erasers. You may also want to consider using other materials such as
        charcoal, pastels, or ink depending on the type of drawing you want to
        create. Before you start drawing, it can be helpful to have an idea in
        mind of what you want to draw. This can be a still life set up, a
        portrait of someone, or a landscape. Once you have your supplies and
        subject matter ready, start by lightly sketching out the basic shapes
        and forms of your subject. From there, you can add in details and refine
        your drawing. Remember to take breaks and step back from your drawing to
        get a fresh perspective. Don&apos;t be afraid to make mistakes, as they
        can often lead to unexpected and interesting results.
      </p>

      <h2>Benefits of Drawing</h2>
      <p>
        Drawing has numerous benefits that make it a valuable activity for
        people of all ages. One of the main benefits of drawing is that it can
        help to improve fine motor skills and hand-eye coordination. Drawing
        also requires concentration and attention to detail, which can help to
        improve focus and concentration. Additionally, drawing can be a great
        way to express oneself creatively and can be a therapeutic outlet for
        emotions and stress. It can also be a fun and enjoyable way to pass the
        time. Additionally, drawing can help to improve visual communication
        skills and can be a useful tool for problem-solving and design. Overall,
        drawing is a beneficial activity that can have numerous positive impacts
        on an individual&apos;s physical and mental well-being.
      </p>
      <h2>How to Draw {topicName}</h2>
      <p>
        {topicDescription}
      </p>
    </div>
  );
};

export default Description;

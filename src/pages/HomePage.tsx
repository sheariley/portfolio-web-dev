import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function HomePage() {
  return (
    <section className="gap-8 space-y-12 lg:block lg:columns-2 max_lg:flex max_lg:flex-col max_lg:items-center">
      <Card>
        <Card.Body>
          <Card.Title>Who I Am</Card.Title>
          <p>
            I am a highly driven and accomplished developer and architect whose
            passion is matched only by my relentless pursuit of perfection. With
            a keen eye for detail and a commitment to excellence, I have honed
            my skills to expertly balance the intricate art of crafting seamless
            user experiences with the robust engineering of scalable,
            maintainable web applications.
          </p>

          <p>
            My approach to web development is holistic, meticulously considering
            every aspect from architecture to end-user experience. I understand
            that a great user interface is only the surface of a successful
            application. I delve deeper, ensuring that the underlying
            architecture supports not only current requirements but also future
            growth, facilitating maintainability and scalability.
          </p>

          <p>
            I am acutely aware of the ever-present demands of the market. I
            strive to deliver high-quality, performant solutions within tight
            timelines, proving that time-to-market does not have to come at the
            expense of quality. My strategic thinking and proactive
            problem-solving abilities make me a valuable asset to any team,
            always pushing the boundaries of what is possible in web
            development.
          </p>

          <p>
            Whether leading a team through complex projects or diving into the
            code myself, I bring a blend of innovation, expertise, and passion
            to the table, continually setting new standards in the field of
            developing web applications.
          </p>

          <p>
            Check out my{' '}
            <Button
              themeColor="primary"
              href="https://github.com/sheariley"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} /> GitHub profile
            </Button>
          </p>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Goals and Aspirations</Card.Title>
          <p>
            I am eager to work with others who are highly driven, open-minded,
            and share my desire to achieve great things.
          </p>
          <p>
            It is my desire to immerse myself in an environment that challenges
            me to continue to expand my knowledge base and skill sets, and
            inspires me to use my creativity.
          </p>
          <p>
            Researching leading-edge technology and design patterns is essential
            to architecting reliable, scalable, and maintainable solutions that
            allow organizations to stay ahead of the competition. This is my
            forte.
          </p>
          <p>
            A priority of mine is to further develop my team leadership skills
            by mentoring others, sharing with them insights I have gained
            through two decades of experience.
          </p>
          <p>
            My goal is to create an environment that fosters creativity and
            nurtures individual growth, where innovative ideas can be developed
            into practical software solutions.
          </p>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>How I Innovate</Card.Title>
          <p>
            An experienced web developer passionate about researching new
            technologies and paradigms brings immense value to a business. Their
            continuous learning keeps the company at the technological
            forefront, integrating the latest advancements for a competitive
            edge.
          </p>

          <p>
            By exploring cutting-edge tools and emerging trends, this developer
            identifies and implements innovative solutions tailored to the
            business&apos;s unique needs. Their creative problem-solving
            transforms novel ideas into functional, efficient, and visually
            appealing web experiences, optimizing performance and enhancing user
            engagement.
          </p>

          <p>
            This forward-thinking approach results in superior products that
            exceed market expectations, giving the business a distinct
            competitive advantage. Their dedication to innovation ensures
            impactful digital solutions that drive growth, helping the company
            stand out and achieve sustained success.
          </p>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>How It All Started</Card.Title>
          <p>
            It all started when I discovered that my high school offered
            programming courses. I was immediately intrigued by the potential of
            coding to solve problems. I knew that I wanted to learn more and
            that I had a passion for technology. So, I enrolled in a class.
          </p>

          <p>
            Starting with the Basic programming language in DOS, I was able to
            grasp the fundamentals of coding. After that, I moved on to C++ and
            Pascal. By the end of the first year I had a solid understanding of
            programming and was starting to teach the teacher new things. I knew
            that this was my calling and that it came naturally to me.
          </p>

          <p>
            I would spend hours in the back of the book store, reading books and
            magazines about the languages I was learning; and other languages
            that interested me, such as HTML, CSS, and JavaScript.
          </p>

          <p>
            When I was finally able to drive and get my first job, I was hired
            by a small, local dial-up internet provider as a technical support
            representative. It wasn&apos;t position that involved programming,
            but it involved computer technology. During that time, I continued
            to learn more about computer systems and hone my programming skills.
            Eventually, that lead to a job at a local company that designed and
            manufactured touch screen kiosks. We used some software that was
            sufficient for basic functionality, but we wanted to try some more
            complicated applications and the software wasn&apos;t up to the
            task. So I saw an opportunity to put my skills to use and got busy.
          </p>

          <p>
            The rest is history and you can read more about it{' '}
            <Button
              to="/experience"
              displayType="link"
              themeColor="info"
              className="px-0"
            >
              here
            </Button>
            .
          </p>
        </Card.Body>
      </Card>
    </section>
  );
}

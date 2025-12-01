import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faBook,
  faBusinessTime,
  faEnvelope,
  faExternalLink
} from '@fortawesome/free-solid-svg-icons';

import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { ExternalLinkUrls } from '@/utils';

export default function HomePage() {
  return (
    <section className="flex flex-col items-center space-y-6 pb-5 md:space-y-12 lg:pb-0">
      <Card className="w-full md:sticky md:top-12 md:min-h-[calc(100svh_-_100px)] lg:min-h-[calc(100svh_-_80px)]">
        <Card.Body className="grow-0">
          <Card.Title>Who I Am</Card.Title>
          <p className="max_lg:my-1">
            I am a highly driven and accomplished developer and architect whose
            passion is matched only by my relentless pursuit of perfection. With
            a keen eye for detail and a commitment to excellence, I have honed
            my skills to expertly balance the intricate art of crafting seamless
            user experiences with the robust engineering of scalable,
            maintainable web applications.
          </p>

          <p className="max_lg:my-1">
            My approach to web development is holistic, meticulously considering
            every aspect from architecture to end-user experience. I understand
            that a great user interface is only the surface of a successful
            application. I delve deeper, ensuring that the underlying
            architecture supports not only current requirements but also future
            growth, facilitating maintainability and scalability.
          </p>

          <p className="max_lg:my-1">
            I am acutely aware of the ever-present demands of the market. I
            strive to deliver high-quality, performant solutions within tight
            timelines, proving that time-to-market does not have to come at the
            expense of quality. My strategic thinking and proactive
            problem-solving abilities make me a valuable asset to any team,
            always pushing the boundaries of what is possible in web
            development.
          </p>

          <p className="max_lg:my-1">
            Whether leading a team through complex projects or diving into the
            code myself, I bring a blend of innovation, expertise, and passion
            to the table, continually setting new standards in the field of
            developing web applications.
          </p>

          <p className="max_lg:my-1">
            Keep scrolling for more about me and my story, explore the website
            via the navigation menu, or check out one of the following links:
          </p>
          <ul className="my-0 list-none pl-0 *:my-4 *:flex *:w-[160px] *:pl-0 md:flex md:flex-row md:space-x-4">
            <li>
              <Button
                themeColor="primary"
                to="/skills"
                icon={faBook}
                size="sm"
                className="w-full justify-start"
              >
                Skills
              </Button>
            </li>
            <li>
              <Button
                themeColor="primary"
                to="/experience"
                icon={faBusinessTime}
                size="sm"
                className="w-full justify-start"
              >
                Experience
              </Button>
            </li>
            <li>
              <Button
                themeColor="primary"
                to="/links"
                icon={faExternalLink}
                size="sm"
                className="w-full justify-start"
              >
                Links
              </Button>
            </li>
            <li>
              <Button
                themeColor="primary"
                href={ExternalLinkUrls.GitHub}
                target="_blank"
                rel="noopener noreferrer"
                icon={faGithub}
                size="sm"
                className="w-full justify-start"
              >
                GitHub profile
              </Button>
            </li>
            <li>
              <Button
                themeColor="primary"
                href={ExternalLinkUrls.LinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                icon={faLinkedin}
                size="sm"
                className="w-full justify-start"
              >
                Linked-In profile
              </Button>
            </li>
          </ul>
          <div className="mt-8 text-center">
            <div>You can contact me at</div>
            <Button
              themeColor="secondary"
              href="mailto:sheariley@live.com"
              icon={faEnvelope}
              className="w-48"
            >
              sheariley@live.com
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Card className="w-full md:sticky md:top-14 md:min-h-[calc(100svh_-_100px)]">
        <Card.Body className="grow-0">
          <Card.Title>Goals and Aspirations</Card.Title>
          <p className="max_lg:my-1">
            I am eager to work with others who are highly driven, open-minded,
            and share my desire to achieve great things.
          </p>
          <p className="max_lg:my-1">
            It is my desire to immerse myself in an environment that challenges
            me to continue to expand my knowledge base and skill sets, and
            inspires me to use my creativity.
          </p>
          <p className="max_lg:my-1">
            Researching leading-edge technology and design patterns is essential
            to architecting reliable, scalable, and maintainable solutions that
            allow organizations to stay ahead of the competition. This is my
            forte.
          </p>
          <p className="max_lg:my-1">
            A priority of mine is to further develop my team leadership skills
            by mentoring others, sharing with them insights I have gained
            through two decades of experience.
          </p>
          <p className="max_lg:my-1">
            My goal is to create an environment that fosters creativity and
            nurtures individual growth, where innovative ideas can be developed
            into practical software solutions.
          </p>
        </Card.Body>
      </Card>
      <Card className="w-full md:sticky md:top-16 md:min-h-[calc(100svh_-_100px)]">
        <Card.Body className="grow-0">
          <Card.Title>How I Innovate</Card.Title>
          <p className="max_lg:my-1">
            As an experienced web developer passionate about researching new
            technologies and paradigms I bring immense value to a business. My
            continuous learning keeps the company at the technological
            forefront, integrating the latest advancements for a competitive
            edge.
          </p>

          <p className="max_lg:my-1">
            By exploring cutting-edge tools and emerging trends, I identify and
            implement innovative solutions tailored to the business&apos;s
            unique needs. My creative problem-solving transforms novel ideas
            into functional, efficient, and visually appealing web experiences,
            optimizing performance and enhancing user engagement.
          </p>

          <p className="max_lg:my-1">
            This forward-thinking approach results in superior products that
            exceed market expectations, giving the business a distinct
            competitive advantage. My dedication to innovation ensures impactful
            digital solutions that drive growth, helping the company stand out
            and achieve sustained success.
          </p>
        </Card.Body>
      </Card>
      <Card className="w-full md:sticky md:top-20 md:min-h-[calc(100svh_-_100px)] lg:min-h-[calc(100svh_-_105px)]">
        <Card.Body className="grow-0">
          <Card.Title>How It All Started</Card.Title>
          <p className="max_lg:my-1">
            It all started when I discovered that my high school offered
            programming courses. I was immediately intrigued by the potential of
            coding to solve problems. I knew that I wanted to learn more and
            that I had a passion for technology. So, I enrolled in a class.
          </p>

          <p className="max_lg:my-1">
            Starting with the Basic programming language in DOS, I was able to
            grasp the fundamentals of coding. After that, I moved on to C++ and
            Pascal. By the end of the first year I had a solid understanding of
            programming and was starting to teach the teacher new things. I knew
            that this was my calling and that it came naturally to me.
          </p>

          <p className="max_lg:my-1">
            I would spend hours in the back of the book store, reading books and
            magazines about the languages I was learning; and other languages
            that interested me, such as HTML, CSS, and JavaScript.
          </p>

          <p className="max_lg:my-1">
            When I was finally able to drive and get my first job, I was hired
            by a small, local dial-up internet provider as a technical support
            representative. It wasn&apos;t a position that involved programming,
            but it involved computer technology. During that time, I continued
            to learn more about computer systems and hone my programming skills.
            Eventually, that lead to a job at a local company that designed and
            manufactured touch screen kiosks. We used some software that was
            sufficient for basic functionality, but we wanted to try some more
            complicated applications and the software wasn&apos;t up to the
            task. So I saw an opportunity to put my skills to use and got busy.
          </p>

          <p className="max_lg:my-1">
            The rest is history and you can read more about it in{' '}
            <Button
              to="/experience"
              themeColor="primary"
              icon={faBusinessTime}
              size="sm"
            >
              Experience
            </Button>
          </p>
        </Card.Body>
      </Card>
      <div className="min-h-6 lg:hidden"></div>
    </section>
  );
}

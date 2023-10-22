import AboutMe from '@/components/server/AboutMe/AboutMe';

export default function AboutPage() {
  return (
    <>
      <div className="flex flex-col">
        <AboutMe />
        <div className="p-5 mt-24 mb-3 bg-gray-200 flex flex-col justify-center items-center text-center">
          <section className="mt-2 mb-2">
            <p className="font-semibold text-base">Who ami I?</p>
            <article>
              개발을 좋아하는 풀스택 개발자
              <br />웹 보안 솔루션 회사 재직 중
            </article>
          </section>
          <section className="mt-2 mb-2">
            <p className="font-semibold text-base">Career</p>
            <article>XX (2017~)</article>
          </section>
          <section className="mt-2 mb-2">
            <p className="font-semibold text-base">Skills</p>
            <article>
              Java, Node, React, Vue, Nextjs <br />
              Git, Docker, Jira <br />
              VSCode, Intelli
            </article>
          </section>
        </div>
      </div>
    </>
  );
}

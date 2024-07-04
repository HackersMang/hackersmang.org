const About = () => {
  return (
    <div className="col-start-1 col-end-3 flex flex-col justify-left items-start m-2 md:m-3 max-h-[700px]">
      <h3 className="text-[#9b9b9b] text-2xl font-bold mb-2">About</h3>
      <div className="overflow-y-auto text-[#9b9b9b] no-scrollbar max-h-[700px] flex flex-col gap-2">
        <div className="text-xl">Hackerspace Mangaluru, a vibrant community of tech enthusiasts dedicated to fostering a thriving tech ecosystem in Mangaluru. We host regular talks, workshops, and meetups on the latest open source technologies, providing a platform for individuals to share knowledge, learn from each other, and collaborate on innovative projects.
        </div>
        <div className="text-xl">
          Our community is driven by a passion for innovation and a desire to make a positive impact in the world. We believe that everyone has something valuable to offer, regardless of their background or skill level. Whether you're a student, professional, beginner, or expert, you're welcome to join us and contribute to our inclusive and supportive environment.
        </div>
        <div className="text-xl">
          Our events are designed to be interactive, informative, and fun, offering a unique opportunity for participants to learn, network, and grow. We cover a wide range of topics related to open source technologies, from machine learning and artificial intelligence to blockchain and cybersecurity.
        </div>
        <div className="text-xl">
          If you're interested in learning more about our community and getting involved, please join us at one of our upcoming events or reach out to us through our website or social media channels. We look forward to meeting you and exploring the possibilities of open source technologies together!
        </div>
      </div>
    </div>
  )
}

export default About
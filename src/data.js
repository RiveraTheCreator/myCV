export const CVData = {
  
    personalData: {
      name: 'Alejandro Rivera',
      title: 'Engineering student',
      image: 'https://media.licdn.com/dms/image/C5603AQEGyIKcVOcMxQ/profile-displayphoto-shrink_800_800/0/1643173796077?e=1685577600&v=beta&t=wLzciw1hvJw7PLmpvqhlDf2Funiq5Svig0bLhHVENfY',
      contacts: [
        { type: 'email', value: 'isaac.alejandrorb@gmail.com' },
        { type: 'phone', value: '+52 5517707896' },
        { type: 'location', value: 'Mexico city' },
        { type: 'linkedin', value: 'https://www.linkedin.com/in/alejandro-rivera-96aba4206/' },
        { type: 'github', value: 'https://github.com/RiveraTheCreator' },      ]
    },
      sections: [
        {
          type: 'text',
          title: 'Career Profile',
          content:'I am a passionate about privacity topics, actually Im studing computer systems engineering at the National Polytechnic Institute, currently in the eighth semester. I have always had a great curiosity for technology and I am constantly seeking new knowledge and skills. I possess the ability to work effectively in a team and independently, with a focus on achieving objectives and self-learning of software tools. I am looking for new challenges in a company that will allow me to develop my technical skills in cloud technologies, computer networks and cybersecurity. I also have a great interest in improving my leadership and communication skills with clients.',
          icon: ''
        },
        {
          type: 'common-list',
          title: 'Education',
          icon: 'graduation',
          items: [
            {
              title: 'Computer Engineering ',
              authority: 'National Polytechnic Institute of Mexico',
              authorityWebSite: 'https://escom.ipn.mx/',
              rightSide: '2019 - 2024'
            }
          ]
        },
        {
          type: 'experiences-list',
          title: 'Professional Experiences',
          description: '',
          icon: 'archive',
          items: [
            {
              title: 'Full-Stack web Development ',
              company: 'Digital House',
              description: 'Bootcamp',
              companyWebSite: 'https://www.digitalhouse.com/mx',
              datesBetween: '2021 , June - December'
            }
          ]
        },
        {
          type: 'projects-list',
          title: 'Projects',
          description: '',
          icon: 'tasks',
          groups: [
            {
              sectionHeader: 'Digital House project',
              description: '',
              items: [
                { title: 'Animaland', projectUrl: 'https://github.com/RiveraTheCreator/Digital_House_project', description: ['Planning and estimation of web server development.','Creation and commissioning of a web server.','Analysis, design and implementation of a database system.','Maintenance and resolution of errors.','Authentication and management of user sessions.','Handling asynchronous connections to web services.','Integration with other platforms through APIs.','Collaborate with Frontend developers.'] }
              ]
            },
            {
              sectionHeader: 'Social Projects repository',
              description: '',
              items: [
                { title: 'SocialProjects', projectUrl: 'https://github.com/RiveraTheCreator/Proyecto_Social', description: 'Academic project'}
              ]
            },          
          ]
        },
        {
          type: 'common-list',
          title: 'Certifications',
          description: '',
          icon: 'comments',
          items: [
            {
              title: 'Certification Az-900',
              authority: 'Microsoft',
              authorityWebSite: 'https://learn.microsoft.com/en-us/certifications/azure-fundamentals/'
            }
          ]
        },
        {
          type: 'common-list',
          title: 'Voluntering',
          description: '',
          icon: 'comments',
          items: [
            {
              title: 'Talent land 2023',
              authority: 'Talent Land',
              authorityWebSite: 'https://www.talent-land.mx/',
              description: 'Providing information and answering questions, monitoring and managing crowds, helping with event logistics such as food and beverage service, and supporting event speakers and presenters.'
            }
          ]
        },
        {
          type: 'common-list',
          title: 'Languages',
          icon: 'language',
          items: [
            {
              authority: 'English',
              authorityMeta: 'Intermediate'
            },
            {
              authority: 'Spanish',
              authorityMeta: 'Native'
            }
          ]
        },
        {
          type: 'tag-list',
          title: 'Hard Skills Proficiency',
          icon: 'rocket',
          items: ['Node JS', 'Javascript', 'Azure', 'Go', 'MySQL', 'Git', 'Design Patter MVC','Create and consume Web API Rest','Linux']
        },
        {
          type: 'tag-list',
          title: 'Soft skills Proficiency',
          icon: 'circle',
          items: ['Ability to communicate assertively.', 'Ability to work in a team', 'Optimal team and independent performance.', 'Ability to follow instructions and deliver results.','Ability to learn software tools in a self-taught way.']
        },
        {
          type: 'tag-list',
          title: 'Hobbies & Interests',
          icon: 'cubes',
          items: ['Photography', 'Camping','Rap']
        }
      ]
}
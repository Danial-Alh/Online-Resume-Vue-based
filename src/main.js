import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
import VueSticky from 'vue-sticky';
import App from './App';
import TimelineLayout from './components/timelineItems/TimelineItemLayout';
import UniversityTimeline from './components/timelineItems/education/UniversityTimelineItem';
import GeneralEducationTimelineItem from './components/timelineItems/education/GeneralEducationTimelineItem';
import GeneralTimelineItem from './components/timelineItems/GeneralTimelineItem';

Vue.use(BootstrapVue);
Vue.directive('sticky', VueSticky);
Vue.component('icon', Icon);
Vue.component('TimelineLayout', TimelineLayout);
Vue.component('UniversityTimeline', UniversityTimeline);
Vue.component('GeneralEducationTimelineItem', GeneralEducationTimelineItem);
Vue.component('GeneralTimelineItem', GeneralTimelineItem);
Vue.mixin({
  data() {
    return {
      identity: {
        name: 'Danial Alihosseini',
        email: 'danial.alihosseini@gmail.com',
        phone: '+98 920 396 0296',
        location: 'Tehran, Iran',
        linkedin: 'http://www.linkedin.com/in/danial-alihosseini',
        github: 'https://github.com/Danial-Alh',
      },
      bio: 'oh bio',
      languages: [
        {
          name: 'Persian',
          level: 'Native',
        },
        {
          name: 'English',
          level: 'Limited Working Proficiency',
        },
      ],
      skills: [
        'Java SE',
        'C/C++',
        'Python',
        'Django',
        'Android',
        'HTML / CSS / JS',
        'VueJS',
        'Linux',
        'ROS',
      ],
      courses: [
        {
          name: 'Principles of Computer & Prog.',
          score: '20',
        },
        {
          name: 'Discrete Structures',
          score: '15',
        },
        {
          name: 'Advanced Computer Programming',
          score: '20',
        },
        {
          name: 'Data Struct. & Algorithms',
          score: '19.7',
        },
        {
          name: 'Design of Algorithms',
          score: '20',
        },
        {
          name: 'Engineering Statistics',
          score: '20',
        },
        {
          name: 'Operating Sys. Design',
          score: '19.84',
        },
        {
          name: 'Data Storage & Retrieval',
          score: '20',
        },
        {
          name: 'Theory of Machines & Languages',
          score: '20',
        },
        {
          name: 'Artificial Intelligence',
          score: '20',
        },
        {
          name: 'Design of Programming Language',
          score: '20',
        },
        {
          name: 'Stochastic Processes',
          score: '20',
        },
        {
          name: 'Engineering Mathematics',
          score: '18.66',
        },
        {
          name: 'Foundations of Data Mining',
          score: '20',
        },
        {
          name: 'Principles of Compiler Design',
          score: '16.3',
        },
      ],
      educations: [
        {
          title: {
            content: 'Amirkabir University of Technology',
            link: 'http://aut.ac.ir/aut/',
          },
          title2: {
            content: '(Tehran Polytechnic)',
            link: '',
          },
          time: '2013 - Present',
          field: 'B.Sc Computer Software Engineering',
          gpa: '18.92',
          gpaTotalScore: '20 (137/140 Units)',
          layout: UniversityTimeline,
        },
        {
          title: {
            content: 'Borhan High School',
            link: '',
          },
          title2: '',
          time: '2007-2013',
          field: 'Diploma Mathematics and Physics',
          gpa: '19.7',
          gpaTotalScore: '20',
          layout: GeneralEducationTimelineItem,
        },
      ],
      experiences: [
        {
          title: {
            content: 'AUTMan (AUT-Uofm) Member',
            link: 'http://autman.aut.ac.ir/teen-size/teensize/',
          },
          title2: {
            content: 'Humanoid Teensize',
            link: '',
          },
          time: '2015 - 2016',
          details: [
            'Researcher and developer on localization methods <br> specially particle filter',
            'Developer of robot\'s behavior',
            {
              content: '2016 Team Descriptor Paper',
              link: 'http://autman.aut.ac.ir/wp-content/uploads/RoboCup2016-AUTMan-Humanoid-TeenSize-Team.pdf',
            },
          ],
          layout: GeneralTimelineItem,
        },
      ],
      honors: [
        {
          title: {
            content: 'Third place in Robocup Humanoid TeenSize League',
            link: 'https://www.robocuphumanoid.org/hl-2015/results/#teen',
          },
          title2: {
            content: 'AUTMan (AUT-Uofm) Team',
            link: '',
          },
          time: '2015 Hefei, China',
          details: [],
          layout: GeneralTimelineItem,
        },
        {
          title: {
            content: 'Among The Top 0.1%',
            link: '',
          },
          title2: {
            content: 'n Country-wide University Entrance Exam <br> in more than 250,000 participants <br> Mathematics and Physics field',
            link: '',
          },
          time: '2013',
          details: [],
          layout: GeneralTimelineItem,
        },
      ],
    };
  },
});
Vue.config.productionTip = true;

new Vue(
  {
    el: '#app',
    template: '<App/>',
    components: {
      App,
    },
  },
);

import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import Courses from './content/Courses';
import Manuals from './content/Manuals';
import Programs from './content/Programs';

const Content = () => {
  const { id } = useParams();
  const { courses, manuals, programs } = useSelector((store) => store.content);

  let selectedCourse;
  let selectedManual;
  let selectedProgram;

  const renderContent = () => {
    switch (id.charAt(0)) {
      case 'C':
        selectedCourse = courses.find((course) => course.id === id);
        return <Courses selectedCourse={selectedCourse} />;
      case 'M':
        selectedManual = manuals.find((manual) => manual.id === id);
        return <Manuals selectedManual={selectedManual} />;
      case 'P':
        selectedProgram = programs.find((program) => program.id === id);
        return <Programs selectedProgram={selectedProgram} />;
      default:
        return <div>404</div>;
    }
  };

  return (
    <>{renderContent()}</>
  );
};

export default Content;

// import React from 'react';
// import { Card, Button, Badge } from 'react-bootstrap';
// import { FaArrowLeft } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
//  import ArtCourseImg1 from '../../utils/images/art-course-1.jpg';
//  import ArtCourseImg2 from '../../utils/images/art-course-2.jpg';
//  import ArtCourseImg3 from '../../utils/images/art-course-3.jpg';
//  import ArtCourseImg4 from '../../utils/images/art-course-4.jpg';
// import ArtCourseImg5 from '../../utils/images/art-course-5.jpg';
// import './Art.css'; // Assuming you have a CSS file for additional styling

// const courses = [
//   {
//     id: 1,
//      img: ArtCourseImg1,
//     title: 'Beginner Art Course',
//     description: 'Learn the fundamentals of drawing and painting with simple techniques.',
//     price: '$120',
//     duration: '6 Weeks',
//     level: 'Beginner',
//   },
//   {
//     id: 2,
//      img: ArtCourseImg2,
//     title: 'Advanced Portrait Drawing',
//     description: 'A deep dive into portrait drawing, covering anatomy, shading, and realism.',
//     price: '$250',
//     duration: '8 Weeks',
//     level: 'Advanced',
//   },
//   {
//     id: 3,
//      img: ArtCourseImg3,
//     title: 'Watercolor Techniques',
//     description: 'Master the art of watercolor painting, from basic to advanced techniques.',
//     price: '$180',
//     duration: '5 Weeks',
//     level: 'Intermediate',
//   },
//   {
//     id: 4,
//      img: ArtCourseImg4,
//     title: 'Oil Painting Mastery',
//     description: 'A comprehensive course on oil painting techniques and mediums.',
//     price: '$300',
//     duration: '10 Weeks',
//     level: 'Advanced',
//   },
//   {
//     id: 5,
//      img: ArtCourseImg5,
//     title: 'Digital Illustration for Beginners',
//     description: 'Learn how to create stunning digital illustrations using modern tools.',
//     price: '$200',
//     duration: '7 Weeks',
//     level: 'Beginner',
//   },
// ];

// const Art = () => {
//   const navigate = useNavigate();
  
//   const handleBackClick = () => {
//     navigate(-1);
//   };

//   const handleMoreDetails = (courseId) => {
//     navigate(`/course-details/${courseId}`); // Example route for more details
//   };

//   return (
//     <div className='courses-page'>
//       {/* Header */}
//       <header className='height-75 bg-dark text-light d-flex flex-column justify-content-center align-items-center'>
//         <div className='container text-center'>
//           <h1 className='fw-semibold mb-3'>Explore Our Art Courses</h1>
//           <p className='mb-4 w-75 mx-auto'>
//             Unleash your creativity and elevate your art skills with our range of courses tailored for every level, from beginner to advanced artists.
//           </p>
//         </div>
//       </header>

//       {/* Main Content */}
//       <div className='container py-5'>
//         <Button variant='outline-light' className='mb-4' onClick={handleBackClick}>
//           <FaArrowLeft /> Back
//         </Button>

//         <div className='row g-4'>
//           {courses.map((course) => (
//             <div key={course.id} className='col-lg-4 col-md-6'>
//               <Card className='course-card shadow-sm h-100'>
//                 <Card.Img variant='top' src={course.img} className='course-img' />
//                 <Card.Body className='d-flex flex-column'>
//                   <Card.Title className='text-danger fs-4'>{course.title}</Card.Title>
//                   <Badge bg={course.level === 'Advanced' ? 'danger' : 'success'} className='mb-2'>
//                     {course.level}
//                   </Badge>
//                   <Card.Text className='flex-grow-1'>{course.description}</Card.Text>
//                   <div className='mt-auto'>
//                     <p className='mb-1'><strong>Price:</strong> {course.price}</p>
//                     <p className='mb-3'><strong>Duration:</strong> {course.duration}</p>
//                     <Button variant='danger' className='w-100 mb-2' onClick={() => handleMoreDetails(course.id)}>
//                       More Details
//                     </Button>
//                     <Button variant='outline-danger' className='w-100'>Enroll Now</Button>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Art;
import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ArtCourseImg1 from '../../utils/images/art-course-1.jpg';
import ArtCourseImg2 from '../../utils/images/art-course-2.jpg';
import ArtCourseImg3 from '../../utils/images/art-course-3.jpg';
import ArtCourseImg4 from '../../utils/images/art-course-4.jpg';
import ArtCourseImg5 from '../../utils/images/art-course-5.jpg';
import './Art.css'; // Assuming you have a CSS file for additional styling

const courses = [
  {
    id: 1,
    img: ArtCourseImg1,
    title: 'Beginner Art Course',
    description: 'Learn the fundamentals of drawing and painting with simple techniques.',
    price: '$120',
    duration: '6 Weeks',
    level: 'Beginner',
  },
  {
    id: 2,
    img: ArtCourseImg2,
    title: 'Advanced Portrait Drawing',
    description: 'A deep dive into portrait drawing, covering anatomy, shading, and realism.',
    price: '$250',
    duration: '8 Weeks',
    level: 'Advanced',
  },
  {
    id: 3,
    img: ArtCourseImg3,
    title: 'Watercolor Techniques',
    description: 'Master the art of watercolor painting, from basic to advanced techniques.',
    price: '$180',
    duration: '5 Weeks',
    level: 'Intermediate',
  },
  {
    id: 4,
    img: ArtCourseImg4,
    title: 'Oil Painting Mastery',
    description: 'A comprehensive course on oil painting techniques and mediums.',
    price: '$300',
    duration: '10 Weeks',
    level: 'Advanced',
  },
  {
    id: 5,
    img: ArtCourseImg5,
    title: 'Digital Illustration for Beginners',
    description: 'Learn how to create stunning digital illustrations using modern tools.',
    price: '$200',
    duration: '7 Weeks',
    level: 'Beginner',
  },
];

const Art = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleMoreDetails = (courseId) => {
    navigate(`/course-details/${courseId}`); // Example route for more details
  };

  return (
    <div className='courses-page'>
      {/* Header */}
      <header className='height-75 bg-dark text-light d-flex flex-column justify-content-center align-items-center'>
  <div className='container text-center'>
    <h1 className='fw-semibold mb-3'>Explore Our Art Courses</h1>
    <p className='mb-4 w-75 mx-auto'>
      Unleash your creativity and elevate your art skills with our range of courses tailored for every level, from beginner to advanced artists.
      Whether you're just starting your artistic journey or looking to refine your technique, we offer a structured path to improve your skills.
    </p>
    <p className='mb-4 w-75 mx-auto'>
      Our courses cover a wide variety of mediums, including drawing, painting, and digital illustration, taught by professional artists with years of experience.
      Each course provides personalized feedback, hands-on projects, and the flexibility to learn at your own pace.
    </p>
    
  </div>
</header>

      {/* Main Content */}
      <div className='container py-5'>
        <Button variant='outline-light' className='mb-4' onClick={handleBackClick}>
          <FaArrowLeft /> Back
        </Button>

        <div className='row g-4'>
          {courses.map((course, index) => (
            <div key={course.id} className='col-lg-12'>
              <Card className='course-card shadow-sm h-100'>
                <div className='row g-0'>
                  {/* Image on Right for Even Courses and Left for Odd Courses */}
                  {index % 2 === 0 ? (
                    <>
                      <div className='col-md-6 d-flex align-items-center'>
                        <Card.Body>
                          <Card.Title className='text-danger fs-4'>{course.title}</Card.Title>
                          <Badge bg={course.level === 'Advanced' ? 'danger' : 'success'} className='mb-2'>
                            {course.level}
                          </Badge>
                          <Card.Text>{course.description}</Card.Text>
                          <p className='mb-1'>
                            <strong>Price:</strong> {course.price}
                          </p>
                          <p className='mb-3'>
                            <strong>Duration:</strong> {course.duration}
                          </p>
                          <Button variant='danger' className='w-100 mb-2' onClick={() => handleMoreDetails(course.id)}>
                            More Details
                          </Button>
                          <Button variant='outline-danger' className='w-100'>Enroll Now</Button>
                        </Card.Body>
                      </div>
                      <div className='col-md-6'>
                        <Card.Img src={course.img} className='course-img img-fluid h-100' alt={course.title} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className='col-md-6'>
                        <Card.Img src={course.img} className='course-img img-fluid h-100' alt={course.title} />
                      </div>
                      <div className='col-md-6 d-flex align-items-center'>
                        <Card.Body>
                          <Card.Title className='text-danger fs-4'>{course.title}</Card.Title>
                          <Badge bg={course.level === 'Advanced' ? 'danger' : 'success'} className='mb-2'>
                            {course.level}
                          </Badge>
                          <Card.Text>{course.description}</Card.Text>
                          <p className='mb-1'>
                            <strong>Price:</strong> {course.price}
                          </p>
                          <p className='mb-3'>
                            <strong>Duration:</strong> {course.duration}
                          </p>
                          <Button variant='danger' className='w-100 mb-2' onClick={() => handleMoreDetails(course.id)}>
                            More Details
                          </Button>
                          <Button variant='outline-danger' className='w-100'>Enroll Now</Button>
                        </Card.Body>
                      </div>
                    </>
                  )}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Art;

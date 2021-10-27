import logo from './logo.svg';
import './App.css';
import {
  Button,
  Heading,
  Container
} from '@chakra-ui/react'
import Layout from './layouts/Layout'
import {
  Switch,
  Route
} from 'react-router-dom'
import DepartmentsPage from './views/Departments';
import TeachersPage from './views/Teachers';
import CoursesPage from './views/Courses';
import StudentsPage from './views/Students';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/departments">
          <DepartmentsPage />
        </Route>
        <Route path="/teachers">
          <TeachersPage />
        </Route>
        <Route path="/courses">
          <CoursesPage />
        </Route>
        <Route path="/students">
          <StudentsPage />
        </Route>
        <Route exact path="/">
          <Container mt="6" maxW="8xl">
            <Heading>Home</Heading>
          </Container>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
import Form from "./components/Form";
import ListUsers from "./components/ListUsers";

function App() {
  return (
    <div className="App container my-5">
      <h1 className='w-100 p-4 bg-dark text-white fw-bold'>
        Thông tin sinh viên
      </h1>
      <Form />
      <h1 className='w-100 p-4 bg-dark text-white fw-bold'>
        Danh sách sinh viên
      </h1>
      <ListUsers />
    </div>
  );
}

export default App;

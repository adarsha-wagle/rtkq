import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersApiSlice";
import NewNoteForm from "./new_note_form";

const NewNote = () => {
  const users = useSelector(selectAllUsers);

  console.log("users ", users);

  const content = users ? <NewNoteForm users={users} /> : <p>Loading...</p>;

  return content;
};
export default NewNote;

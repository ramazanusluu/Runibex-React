import SingleComment from "./components/SingleComment";
import UserCard from "./components/UserCard";
import profile1 from "./image/man.png";
import profile2 from "./image/woman.png";

function App() {
  return (
    <div className="ui comments">
      <UserCard>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
          quaerat.
        </div>
      </UserCard>
      <UserCard>
        <SingleComment
          name="Ramazan"
          date="Todat At 5.00 PM"
          text="Single Component 1"
          picture={profile1}
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name="Asya"
          date="Today At 6.00 PM"
          text="Single Component 2"
          picture={profile2}
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name="Hira"
          date="Today At 7.00 PM"
          text="Single Component 3"
          picture={profile1}
        />
      </UserCard>
    </div>
  );
}

export default App;

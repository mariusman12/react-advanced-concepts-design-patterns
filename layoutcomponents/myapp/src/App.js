import { LargeAuthorListItems } from './components/authors/LargeListItems';
import { SmallAuthorListItems } from './components/authors/SmallListItems';
import { LargeBookListItem } from './components/books/LargeListItems';
import { SmallBookListItem } from './components/books/SmallListItems';
import { NumberedList } from './components/lists/Numbered';
import { RegularList } from './components/lists/Regular';
import { RegularList2 } from './components/lists/Regular2';
import { Modal } from './components/Modal';
import { SplitScreen } from './components/split-screen';
import {authors} from "./data/authors"
import {books} from "./data/books"
const LeftSideComponent = ({title}) =>{
  return (
    <div>
      <h2 style={{backgroundColor:'blue'}}>
      I am  {title} Component
      </h2>
    </div>
  )
}
const RightSideComponent = ({title}) =>{
  return (
    <div>
      <h2 style={{backgroundColor:'red'}}>
            I am  {title} Component
      </h2>
    </div>
  )
}


function App() {
  return (
    <div>
        <SplitScreen leftWidth={1} rightWidth={3}>
            <LeftSideComponent title={'Left'}/>
            <RightSideComponent title={'Right'}/>
          </SplitScreen>

          <>
            <RegularList items={authors} param={"author"} ItemComponent={SmallAuthorListItems}/>
            <NumberedList items={authors} param={"author"} ItemComponent={LargeAuthorListItems}/>
            <RegularList2 array={books} type={"book"} ItemComponent={SmallBookListItem}/>
            <RegularList2 array={books} type={"book"} ItemComponent={LargeBookListItem}/>
          </>

          <>
            <Modal>
              <LargeBookListItem book={books[0]}/>
            </Modal>
          </>
    </div>
  );
}

export default App;

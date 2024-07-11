import { Lesson_09Wrapper, InputControl } from "../Homework/styles";

function Lesson_09() {
    return (
        <Lesson_09Wrapper>
          <InputControl>
            {/* <Input
              id="search-input"
              label="Search"
              name="search"
              placeholder="Enter item for search"
            /> */}
            <input
              id="search-input"
              name="search"
              placeholder="Enter item for search"
              //   value - это значение самого инпута, т.е то значение котрое введет потенциальный пользователь
              value={searchInputValue}
              // onChange - функция, которая срабатывает, когда пользователь что-то вводит в инпут
              onChange={onChangeInput}
            />
          </InputControl>
          <ButtonControl>
            <Button name="Search" onClick={onSearch} />
          </ButtonControl>
        </Lesson_09Wrapper>
      );
    }
    



const onChangeInput = (event: any) => {
    console.log(event.target.value);
    console.log("Input onChange event", event);
  };

  const onSearch = () => {};

  


export default Lesson_09;


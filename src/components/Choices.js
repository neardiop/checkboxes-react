import { useState } from "react"

const listChoices = [
    {id: 0, name: "checkbox1", status: false, label: "Item 1"},
    {id: 1, name: "checkbox2", status: false, label: "Item 2"},
    {id: 2, name: "checkbox3", status: false, label: "Item 3"},
    {id: 3, name: "checkbox4", status: false, label: "Item 4"},
]

const Choices = () => {

    const [list, setList] = useState(listChoices)

    const allChoiceChecked =
    !list.filter(({ status }) => !status).length > 0;

    const handleChoiceToggleAll = ({ target: { checked } }) => {
        setList(
            list?.map((el) => ({
              ...el,
              status: checked,
            })) || []
          );
    }

    const handleChoiceToggle = (id) => {
        setList(
            list?.map((el) => ({
              ...el,
              status: el.id === id ? !el.status : el.status,
            })) || []
          );
    }

    return (
        <div className={{}}>
            <div>
                <input type="checkbox" name="checkboxAll" onChange={handleChoiceToggleAll} checked={allChoiceChecked}/>
                <label htmlFor="checkboxAll">Select all</label>
            </div>
            {
                list.map(({id, name, status, label}) => (
                    <div key={id}>
                        <input type="checkbox" name={name} checked={status} onChange={() => handleChoiceToggle(id)}/>
                        <label htmlFor={name}>{label}</label>
                    </div>
                ))
            }
        </div>
    )
}

export default Choices;
const AddToDo = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input onChange={props.onChange} value={props.value}/>
        <button type='submit'>Добавить</button>
      </form>
    </div>
  )
}

export default AddToDo

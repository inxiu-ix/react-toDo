const AddToDo = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input onChange={props.onChange} />
        <button type='submit'>Добавить</button>
      </form>
    </div>
  )
}

export default AddToDo

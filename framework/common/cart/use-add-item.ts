const useAddItem = () => {
  return (input: any) => {
    return {
      data: JSON.stringify(input) + 'with data!',
    }
  }
}

export default useAddItem

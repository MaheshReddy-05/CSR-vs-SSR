async function fetchTodos() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5', { cache: 'no-store' });
    return res.json();
  }

const SSR = async () => {
    const todosData = await fetchTodos();
    const styles = {
        backgroundColor: 'lightblue',
        padding: '20px',
        borderRadius: '5px',
        fontFamily: 'Geist Sans, sans-serif',
        color: 'black',
        margin: '40px'
    }
    return (
        <div style={styles}>
            <h2 className="text-2xl font-semibold mb-4">Server-Side Rendered Todos</h2>
            <ul className="list-disc pl-5">
                {todosData.map(({ id, title }: { id: number; title: string }) => (
                    <li key={id} className="mb-2">{title}</li>
                ))}
            </ul>
        </div>
    );
}

export default SSR;
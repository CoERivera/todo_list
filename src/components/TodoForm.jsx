import { useState } from "react";

import { Button, Card, Flex, TextInput } from "@mantine/core";

function TodoForm() {
    const [task, setTask] = useState('');
    const [isValid, setIsValid] = useState(false);

    const handleChange = (e) => {
        setTask(e.target.value);
        if (e.target.value.length >= 2) {
            setIsValid(true);
        }
        else setIsValid(false);
    }

    return (
        <Card sx={{ marginBottom: 20, padding: 'md' }}>
            <form>
                <Flex gap='md'>
                    <TextInput
                        sx={{ flexGrow: 1 }}
                        placeholder='Add an action to the list.'
                        value={task}
                        onChange={handleChange}
                    />
                    <Button
                        type="submit"
                        variant="gradient"
                        gradient={{ from: 'teal', to: 'lime' }}
                        disabled={!isValid}>
                        Add Todo
                    </Button>
                </Flex>
            </form>
        </Card>
    )
}

export default TodoForm;
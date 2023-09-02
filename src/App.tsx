import { useEffect, useRef, useState } from "react";
import styles from "./App.module.scss";
import { ToDoItem } from "./shared/types";
import { ToDoList } from "./widgets/CardsList/ToDoList";
import axios from "axios";
import { faker } from "@faker-js/faker";
import { Header } from "./widgets/Header/Header";
import { IntersectionObserverLoader } from "./features/IntersectionObserverLoader/IntersectionObserverLoader";

type ToDoResponse = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

// const getDelay = async (ms: number) =>
//     new Promise((resolve) => setTimeout(resolve, ms));

const fetchToDoesByPage = async (page: number, delay?: number) => {
    const delayQuery = delay ? `&_delay=${delay}` : "";
    const response = await axios.get<ToDoResponse[]>(
        `https://jsonplaceholder.typicode.com/todos?_page=${page + delayQuery}`
    );

    return response.data;
};

const injectMockDataInItem = (toDoItem: ToDoResponse): ToDoItem => ({
    ...toDoItem,
    description: faker.company.catchPhrase(),
    tags: [
        { color: "violet", content: faker.company.buzzNoun() },
        { color: "gray", style: "arrow", content: faker.company.buzzNoun() },
    ],
    dates: {
        startDate: faker.date.recent().toDateString(),
        endDate: faker.date.future().toDateString(),
    },
});

function App() {
    const [toDoes, setToDoes] = useState<ToDoItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const currentPageRef = useRef(1);

    const fetchMoreToDoes = () => {
        console.log("fetch started");
        setIsLoading(true);
        const getToDoes = async (page: number) => {
            const toDoes = await fetchToDoesByPage(
                page,
                Math.random() * 10 + 1000
            );

            const toDoesWithDataInjection = toDoes.map((toDoItem) =>
                injectMockDataInItem(toDoItem)
            );
            // const scrollBeforeNewDataShowed = window.scrollY;

            setToDoes((prev) => [...prev, ...toDoesWithDataInjection]);
            setIsLoading(false);

            // window.scrollTo({ top: scrollBeforeNewDataShowed });
        };

        try {
            getToDoes(currentPageRef.current);
            currentPageRef.current += 1;
        } catch (err) {
            console.log(err);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchMoreToDoes();
    }, []);

    return (
        <div className={styles.root}>
            <Header className={styles.header} amountOfToDoes={toDoes.length} />
            <ToDoList toDoItems={toDoes} />
            <IntersectionObserverLoader
                handler={fetchMoreToDoes}
                isLoading={isLoading}
            />
        </div>
    );
}

export default App;

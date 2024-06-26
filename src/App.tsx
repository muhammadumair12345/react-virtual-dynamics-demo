import { useState } from "react";
import { VirtualizedList } from "react-virtual-dynamics";

const initialData = Array.from({ length: 500 }).map((_, i) => i + 1);

const App = () => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = () => {
    if (!isLoading) {
      setIsLoading(true);
      setTimeout(() => {
        const moreData = Array.from({ length: 20 }).map(
          (_, i) => data.length + i + 1
        );
        setData([...data, ...moreData]);
        setIsLoading(false);
      }, 1000);
    }
  };
  return (
    <div>
      <VirtualizedList
        dataLength={data.length}
        viewportHeight={500}
        itemHeight={100}
        gap={10}
        gridColumns={4}
        renderItem={(index, style) => (
          <div key={index} style={{ ...style, background: "gray" }}>
            {data[index]}
          </div>
        )}
      />
      <VirtualizedList
        dataLength={data.length}
        viewportHeight={500}
        gridColumns={4}
        itemHeight={100}
        gap={10}
        loadMore={loadMore}
        isLoading={isLoading}
        renderItem={(index, style) => (
          <div key={index} style={{ ...style, background: "gray" }}>
            {data[index]}
          </div>
        )}
      />
    </div>
  );
};

export default App;

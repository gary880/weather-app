import React from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  DroppableProvided,
  DraggableProvided,
} from "@hello-pangea/dnd";

import WeatherForm from "./components/WeatherForm";
import WeatherCard from "./components/WeatherCard";
import useWeatherData from "./hooks/useWeatherData";

const App: React.FC = () => {
  const { weatherData, addCity, deleteWeatherCard, setWeatherData } =
    useWeatherData();

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(weatherData);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setWeatherData(items);
  };

  return (
    <div className="App">
      <WeatherForm onAddCity={addCity} />
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="weatherCards" direction="horizontal">
          {(provided: DroppableProvided) => (
            <div
              className="weather-cards"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {weatherData.map((data, index) => (
                <Draggable
                  key={data.id}
                  draggableId={data.id.toString()}
                  index={index}
                >
                  {(provided: DraggableProvided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <WeatherCard
                        data={data}
                        onDelete={() => deleteWeatherCard(data.id, data.city)}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default App;

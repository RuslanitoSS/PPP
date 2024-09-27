console.log(`
+------------------+                +------------------+
|     Subject      |                |     Observer      |
|------------------|                |------------------|
|+ registerObserver|                |+ update(state:    |
|+ removeObserver  |<----------------+  WeatherState):  |
|+ notifyObservers |                |  void            |
+------------------+                +------------------+

       ^                                      ^
       |                                      |
+--------------------------+          +------------------+
|   ConcreteSubject        |          | ConcreteObserver |
|     (WeatherData)        |<---------| (e.g., Current   |
|--------------------------|          | ConditionsDisplay)|
|+ getState(): WeatherState|          +------------------+
|+ setState(state:         |
|  WeatherState): void     |
|+ measurementsChanged():  |
|  void                    |
|--------------------------|
|- state: WeatherState     |
+--------------------------+

                     |
                     v
           +------------------+
           |  WeatherState     |
           +------------------+
           |+ temperature:     |
           |  float            |
           |+ humidity: float  |
           |+ pressure: float  |
           +------------------+

`)
console.log(`
+--------------------+       +--------------------------+
|    <<interface>>   |       |         Display          |
|      Command       |       +--------------------------+
|--------------------|       | - brightnessCommand      |
| + execute()        |       | - temperatureCommand     |
| + store()          |       | - humidityCommand        |
| + load()           |       +--------------------------+
+--------------------+       | + setBrightnessCommand() |
                             | + setTemperatureCommand()|
                             | + setHumidityCommand()   |
                             | + buttonWasPressed()     |
                             +--------------------------+
                                      |
                                      |
                +---------------------+---------------------+
                |                                           |
  +------------------------+                    +-----------------------------+
  | BrightnessCommand      |                    | TemperatureCommand          |
  +------------------------+                    +-----------------------------+
  | - sensor: LightSensor  |                    | - sensor: TemperatureSensor |
  | - value: number        |                    | - value: number             |
  +------------------------+                    +-----------------------------+
  | + execute()            |                    | + execute()                 |
  +------------------------+                    +-----------------------------+
                |                                           |
                |                                           |
        +-----------------+                       +------------------+
        | LightSensor     |                       | TemperatureSensor|
        +-----------------+                       +------------------+
        | + setParameter()|                       | + setParameter() |
        +-----------------+                       +------------------+

                 +-------------------------+
                 | HumidityCommand         |
                 +-------------------------+
                 | - sensor: HumiditySensor|
                 | - value: number         |
                 +-------------------------+
                 | + execute()             |
                 +-------------------------+
                           |
                           |
                +-------------------+
                | HumiditySensor    |
                +-------------------+
                | + setParameter()  |
                +-------------------+

`)
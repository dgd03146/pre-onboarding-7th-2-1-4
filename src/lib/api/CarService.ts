import axios from "axios";

class CarService {
  constructor(private fillType: string, private segment: string) {}
}

export default new CarService("hi", "bye");

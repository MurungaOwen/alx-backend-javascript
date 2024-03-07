import ClassRoom from "./0-classroom";
export default function initializeRooms() {
    const owen = new ClassRoom(19);
    const hood = new ClassRoom(20);
    const codes = new ClassRoom(34);
    return [owen, hood, codes];
}
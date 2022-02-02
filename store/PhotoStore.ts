import {makeAutoObservable, runInAction, reaction} from 'mobx';
// import uuid from 'node-uuid';

export class PhotoStore {
  //   authorStore;
  //   transportLayer;
  photos = [];
  isLoading = true;
  isError = false;

  constructor() {
    makeAutoObservable(this);
    // this.authorStore = authorStore; // Store that can resolve authors.
    // this.transportLayer = transportLayer; // Thing that can make server requests.
    // this.transportLayer.onReceiveTodoUpdate(updatedTodo =>
    //   this.updateTodoFromServer(updatedTodo),
    // );
    console.log('antes');
    this.loadPhotos();
    console.log('despues');
    4;
  }

  // Fetches all Todos from the server.
  loadPhotos() {
    try {
      this.isLoading = true;
      console.log('hace de nuevo el fetch!!!');
      fetch('https://jsonplaceholder.typicode.com/photos')
        .then(fetchedPhotos => fetchedPhotos.json())
        .then(fetchedJsonPhotos => {
          this.photos = fetchedJsonPhotos;
        });
      //   const allPhotos = await response.json();
      //   await setPhotos(allPhotos);
    } catch (err) {
      console.log(err);
      this.isError = true;
    }
    this.isLoading = false;
  }

  // Update a Todo with information from the server. Guarantees a Todo only
  // exists once. Might either construct a new Todo, update an existing one,
  // or remove a Todo if it has been deleted on the server.
}

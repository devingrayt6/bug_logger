export default class Bug {
    constructor(data) {
        this.title = data.title;
        this.description = data.description;
        this.closed = data.closed;
        this.reportedBy = data.reportedBy;
        this.closedDate = data.closedDate;
    }

    // ${this.description}

    get Template() {
        return `
        
            <div class="card col-12 col-md-2 m-3" style="width: 12rem;">
                <div class="card-body">
                    <h5 class="card-title">${this.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${this.reportedBy}</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="card-link">close bug</a>
                    <a href="#" class="card-link">Edit</a>
                </div>
            </div>

        `
    }
}
class EmployeeBox {
    constructor({name, position}, parent) {
        
        this.name = name;
        this.position = position;

        this.parent = parent;

    }

    attach() {
        this.parent.append(this.template());
    }

    template() {
        return `<element class="depts-${this.name}">
            <img src="${asset_path}images/img-container-portrait.svg">
            <div class="thumb-details">
                <h5>${this.name.toTitleCase()}</h5>
                <p><small>${this.position}</small></p>
            </div>
        </element>`;
    }

}


export default EmployeeBox;
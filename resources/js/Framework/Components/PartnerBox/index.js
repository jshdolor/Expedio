class PartnerBox {
    constructor({name, fullName, position}, parent) {
        
        this.name = name;
        this.fullName = fullName;
        this.position = position;

        this.parent = parent;

    }

    attach() {
        this.parent.append(this.template());
    }

    template() {
        return `<element class="partner-${this.name}">
            <img src="${asset_path}images/img-container-portrait.svg">
            <div class="thumb-details">
                <h5>${this.fullName.toTitleCase()}</h5>
                <p><small>${this.position}</small></p>
            </div>
        </element>`;
    }

}




export default PartnerBox;
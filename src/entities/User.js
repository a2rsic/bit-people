class User {
    constructor(picture, name, email, age) {
        this.picture = picture.thumbnail
        this.name = name;
        this.email = email;
        this.age = age;
    }

    getHiddenEmail() {
        return "...hhffdli"
    }
}

export default User
class createUserDto {
  constructor({ email, username, firstName, lastName, address }) {
    this.email = email;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
  }
}

export default createUserDto;

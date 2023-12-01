class ProfileInputModel {
  constructor(placeholder, type, name, value, isActive) {
    this.placeholder = placeholder
    this.formType = type
    this.formName = name
    this.value = value
    this.status = isActive
  }
}

const profileInputModel = new ProfileInputModel()

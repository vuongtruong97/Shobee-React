const appendFormData = (data) => {
    const formData = new FormData()

    Object.keys(data).forEach((key) => {
        if (data[key] instanceof FileList) {
            for (let i = 0; i < data[key].length; i++) {
                formData.append(key, data[key][i])
            }
        }
        if (data[key] instanceof File) {
            formData.append(key, data[key][0])
        }
        formData.append(key, data[key])
    })

    return formData
}

export default appendFormData

module.exports.getById = async (data) => {
    try {
        const doc = await data.model.findById(data._id)
        return {
            status: true,
            result: doc,
        }
    } catch (err) {
        console.error('[ERROR Repository-findById]', err)
        return { status: false }
    }
}
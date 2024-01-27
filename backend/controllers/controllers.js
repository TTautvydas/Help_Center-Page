import Request from "../models/Request.js";

export async function submitRequest(req, res) {
  const { name, email, orderId, description } = req.body;

  try {
    const request = new Request({
      clientName: name,
      clientEmail: email,
      orderId,
      description,
    });

    await request.save();

    res.json(request);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getRequests(req, res) {
  try {
    const requests = await Request.find({}, { __v: 0 });

    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getRequestById(req, res) {
  const { id } = req.params;

  try {
    const request = await Request.findById(id);

    if (!request) {
      res.status(500).json({ message: "No request found with this ID" });
    }

    res.json(request);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong getting this request" });
  }
}

export async function deleteRequest(req, res) {
  const { id } = req.params;
  try {
    const request = await Request.findById(id);

    if (!request) {
      res.status(500).json({ message: "Request was not found" });
    }

    await Request.findByIdAndDelete(id);

    res.status(200).json({ message: "Request deleted" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong on delete" });
  }
}

export async function fallBackRoute(req, res) {
  res.status(404).json({ error: "Oops! Page is not found" });
}

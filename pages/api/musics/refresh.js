

export default async (req, res) => {
  if (req.method == "GET") {
    return res.status(200).json({ok : true})
  } else {
    return res.status(405).json({error : "Method Not Allowed"})
  }
};

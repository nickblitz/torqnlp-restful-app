module.exports = {
    results: [
        {
            id: 111,
            name: "FAR Causes",
            slug: 'far-causes',
            file: 'far-causes.csv',
            status: 'PREPARING',
            createdAt: '2023-02-11 12:00:00',
            // TODO: we should sign the file path in the view and generate url there.
            dataSetFileUrl: 'https://firebasestorage.googleapis.com/v0/b/torqnlp.appspot.com/o/sample-embedding.json?alt=media&token=901d621e-9c6c-402b-a08b-88dd828382a3',
        },
        {
            id: 222,
            name: "DFAR Clauses",
            slug: 'dfar-clauses',
            file: 'dfar-clauses.csv',
            status: 'TRAINING',
            createdAt: '2023-02-11 12:00:00',
            // TODO: we should sign the file path in the view and generate url there.
            dataSetFileUrl: 'https://firebasestorage.googleapis.com/v0/b/torqnlp.appspot.com/o/sample-embedding.json?alt=media&token=901d621e-9c6c-402b-a08b-88dd828382a3',
        },
        {
            id: 333,
            name: "US Code",
            slug: 'us-code',
            file: 'us-code.csv',
            status: 'COMPLETED',
            createdAt: '2023-02-11 12:00:00',
            // TODO: we should sign the file path in the view and generate url there.
            dataSetFileUrl: 'https://firebasestorage.googleapis.com/v0/b/torqnlp.appspot.com/o/sample-embedding.json?alt=media&token=901d621e-9c6c-402b-a08b-88dd828382a3',
        },

    ]
};